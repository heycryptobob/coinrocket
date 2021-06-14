import { useState } from "react";
import { Card, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import moment from "moment";
import { useMutation } from "@apollo/client";
import { ADD_COIN } from "../mutations/addCoin";
import { Twitter, Telegram } from "@styled-icons/boxicons-logos";

function FormError({ errors, name }) {
  return (
    <div className="invalid-feedback">
      <ErrorMessage errors={errors} name={name} />
    </div>
  );
}

export function CoinForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitted, isSubmitting },
  } = useForm({
    // defaultValues: {
    //   name: "Bitcoin",
    //   symbol: "BTC",
    //   website: "https://bitcoin.com",
    //   logo: {
    //     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/480px-Bitcoin.svg.png",
    //   },
    //   launch: moment().format("YYYY-MM-DDTHH:mm"),
    //   description: "Bitcoin is a decentralized digital currency.",
    //   contract: {
    //     chain: "bsc",
    //     address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    //   },
    //   social: {
    //     telegram: { url: "https://t.me/bitcoin" },
    //     twitter: { url: "https://twitter.com/bitcoin" },
    //     discord: { url: "https://discord.com/bitcoin" },
    //     medium: { url: "https://medium.com/@bitcoin" },
    //   },
    // },
  });
  const [token, setToken] = useState(null);
  // const [token, setToken] = useState(true);
  const [completed, setCompleted] = useState(false);

  const [addCoin] = useMutation(ADD_COIN);

  const uploadAsset = async (url) => {
    const response = await fetch(
      `${process.env.REACT_APP_GRAPHCMS_ENDPOINT}/upload`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GRAPHCMS_AUTH_TOKEN}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `url=${encodeURIComponent(url)}`,
      }
    );
    return await response.json();
  };

  const onSubmit = async (data) => {
    const logo = await uploadAsset(data.logo.url);
    delete data.logo.url;
    data = {
      ...data,
      launch: moment(data.launch).format(),
      logo: { connect: { id: logo.id } },
    };
    // console.log(data)
    await addCoin({ variables: { data } });
    setCompleted(true);
  };

  return (
    <Card className="shadow border-0">
      <Card.Header hidden>Apply to get your coin listed</Card.Header>
      <Card.Body className="p-4">
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className={completed ? "d-none" : ""}
        >
          <Row className="mb-2">
            <Col>
              <h6>General</h6>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  placeholder="Bitcoin"
                  {...register("name", { required: "Name is required" })}
                  isInvalid={errors.name}
                  isValid={isSubmitted && touchedFields.name && !errors.name}
                  data-testid="name"
                />
                <FormError errors={errors} name="name" />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="symbol">
                <Form.Label>Symbol</Form.Label>
                <Form.Control
                  placeholder="BTC"
                  {...register("symbol", { required: "Symbol is required" })}
                  isInvalid={errors.symbol}
                  isValid={
                    isSubmitted && touchedFields.symbol && !errors.symbol
                  }
                  data-testid="symbol"
                />
                <FormError errors={errors} name="symbol" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Form.Group controlId="website">
                <Form.Label>Website</Form.Label>
                <Form.Control
                  {...register("website", {
                    pattern: {
                      value:
                        /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
                      message: "Invalid website url",
                    },
                  })}
                  placeholder="https://bitcoin.com"
                  isInvalid={errors.website}
                  isValid={
                    isSubmitted && touchedFields.website && !errors.website
                  }
                  data-testid="website"
                />
                <FormError errors={errors} name="website" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="logo.url">
                <Form.Label>Logo</Form.Label>
                <Form.Control
                  placeholder="https://via.placeholder.com/512.png"
                  {...register("logo.url", {
                    required: "Logo URL is required",
                  })}
                  isInvalid={errors.logo?.url}
                  isValid={
                    isSubmitted && touchedFields.logo?.url && !errors.logo?.url
                  }
                  data-testid="logo.url"
                />
                <FormError errors={errors} name="logo.url" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Ex. Bitcoin is a decentralized digital currency."
                  {...register("description", {
                    required: "Description is required",
                  })}
                  isInvalid={errors.description}
                  isValid={
                    isSubmitted &&
                    touchedFields.description &&
                    !errors.description
                  }
                  data-testid="description"
                />
                <FormError errors={errors} name="description" />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="launch">
                <Form.Label>Launch Date & Time</Form.Label>
                <Form.Control
                  {...register("launch", { required: "Launch is required" })}
                  type="datetime-local"
                  isInvalid={errors.launch}
                  isValid={
                    isSubmitted && touchedFields.launch && !errors.launch
                  }
                  data-testid="launch"
                />
                <Form.Text muted>
                  Contract address is hidden prior to launch.
                </Form.Text>
                <FormError errors={errors} name="launch" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-4 mb-2">
            <Col>
              <h6>Contract</h6>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Form.Group controlId="chain">
                <Form.Label>Chain</Form.Label>
                <Form.Control
                  as="select"
                  {...register("contract.chain", {
                    required: "Chain is required",
                  })}
                  isInvalid={errors.contract?.chain}
                  isValid={
                    isSubmitted &&
                    touchedFields.contract?.chain &&
                    !errors.contract?.chain
                  }
                  data-testid="contract.chain"
                >
                  <option value="bsc" default>
                    BSC
                  </option>
                </Form.Control>
                <FormError errors={errors} name="contract.chain" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  {...register("contract.address", {
                    required: "Address is required",
                    pattern: {
                      value: /^0x[a-fA-F0-9]{40}$/,
                      message: "Invalid format",
                    },
                  })}
                  placeholder="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
                  isInvalid={errors.contract?.address}
                  isValid={
                    isSubmitted &&
                    touchedFields.contract?.address &&
                    !errors.contract?.address
                  }
                  data-testid="contract.address"
                />
                <FormError errors={errors} name="contract.address" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-4 mb-2">
            <Col>
              <h6>Socials</h6>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Form.Group controlId="social.telegram.url">
                <Form.Label>Telegram</Form.Label>
                <Form.Control
                  {...register("social.telegram.url", {
                    required: "Telegram required",
                    pattern: {
                      value: /http(?:s)?:\/\/?t\.me\/([a-zA-Z0-9_]+)/,
                      message: "Invalid telegram url",
                    },
                  })}
                  placeholder="https://t.me/bitcoin"
                  isInvalid={errors.social?.telegram?.url}
                  isValid={
                    isSubmitted &&
                    touchedFields.social?.telegram?.url &&
                    !errors.social?.telegram?.url
                  }
                  data-testid="social.telegram.url"
                />
                <FormError errors={errors} name="social.telegram.url" />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="social.twitter.url">
                <Form.Label>Twitter</Form.Label>
                <Form.Control
                  {...register("social.twitter.url", {
                    pattern: {
                      value:
                        /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/,
                      message: "Invalid twitter url",
                    },
                  })}
                  placeholder="https://twitter.com/bitcoin"
                  isInvalid={errors.social?.twitter?.url}
                  isValid={
                    isSubmitted &&
                    touchedFields.social?.twitter?.url &&
                    !errors.social?.twitter?.url
                  }
                  data-testid="social.twitter.url"
                />
                <FormError errors={errors} name="social.twitter.url" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Form.Group controlId="social.discord.url">
                <Form.Label>Discord</Form.Label>
                <Form.Control
                  {...register("social.discord.url", {
                    pattern: {
                      value:
                        /http(?:s)?:\/\/(?:www\.)?discord\.com\/([a-zA-Z0-9_]+)/,
                      message: "Invalid discord url",
                    },
                  })}
                  placeholder="https://discord.com/bitcoin"
                  isInvalid={errors.social?.discord?.url}
                  isValid={
                    isSubmitted &&
                    touchedFields.social?.discord?.url &&
                    !errors.social?.discord?.url
                  }
                  data-testid="social.discord.url"
                />
                <FormError errors={errors} name="social.discord.url" />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="social.medium.url">
                <Form.Label>Medium</Form.Label>
                <Form.Control
                  {...register("social.medium.url", {
                    pattern: {
                      value:
                        /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
                      message: "Invalid medium url",
                    },
                  })}
                  placeholder="https://medium.com/@bitcoin"
                  isInvalid={errors.social?.medium?.url}
                  isValid={
                    isSubmitted &&
                    touchedFields.social?.medium?.url &&
                    !errors.social?.medium?.url
                  }
                  data-testid="social.medium.url"
                />
                <FormError errors={errors} name="social.medium.url" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-4 mb-2">
            <Col className="d-flex justify-content-center">
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={(token) => setToken(token)}
                data-testid="recaptcha"
              />
            </Col>
          </Row>
          <Row className="mt-4 mb-2">
            <Col>
              <Button
                type="submit"
                size="lg"
                disabled={token == null || isSubmitting || completed}
                data-testid="submit-btn"
                block
              >
                {!isSubmitting ? (
                  <span>Submit Project</span>
                ) : (
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                )}
              </Button>
              {/* <code>{ `isSubmitting: ${isSubmitting}` }</code><br/>
              <code>{ `completed: ${completed}` }</code><br/>
              <code>{ `token: ${token}` }</code><br/> */}
            </Col>
          </Row>
        </form>
        <div hidden={!completed} className="text-center mt-4 mb-4">
           {/* ? "d-none" : "text-center"}> */}
          <h3>Thank you</h3>
          <p className="lead">
            Follow us on telegram to stay tuned on the launch!
          </p>
          <Row>
            <Col className="d-flex justify-content-center align-items-center pt-2">
              <a
                href="https://t.me/coinrocketapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Telegram size="24" />
                &nbsp;<span>@coinrocketapp</span>
              </a>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center align-items-center pt-2">
              <a
                href="https://twitter.com/coinrocketapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size="24" />
                &nbsp;<span>@coinrocketapp</span>
              </a>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
}
