// import { Container } from "semantic-ui-react";
import { FooterMessage, HeaderMessage } from "./components/common/Message";
import { useState, useRef, useEffect } from "react";
import { Form, Segment, TextArea, Divider, Button } from "semantic-ui-react";
import CommonSocials from "./components/common/CommonSocials";
import DragNDrop from "./components/common/DragNDrop";
import axios from "axios";
let cancel;

const signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    youtube: "",
    twitter: "",
    instagram: "",
    facebook: "",
  });
  const { name, email, password, bio } = user;

  //*Form States */
  const [formLoading, setFormLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  const [userNameLoading, setUserNameLoading] = useState(false);
  const [userNameAvailable, setUserNameAvailable] = useState(false);
  const [userName, setUserName] = useState("");

  const [showSocialLinks, setShowSocialLinks] = useState(false);

  const inputRef = useRef(null);
  const [highlighted, setHighlighted] = useState(false);
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);

  //*Functions */
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormLoading(true);

    let profilePicURL;

    if (media !== null) setFormLoading(false);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "media" && files.length > 0) {
      setMedia(() => files[0]);
      setMediaPreview(() => URL.createObjectURL(files[0]));
      setHighlighted(true);
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const checkUsername = async () => {
    const cancelToken = axios.CancelToken;

    setUserNameLoading(true);
    try {
      cancel && cancel();
      const res = await axios.get(`/api/v1/user/${userName}`, {
        cancelToken: new cancelToken((canceler) => {
          cancel = canceler;
        }),
      });
      if (res.data === "Available") {
        setErrorMsg(null)
        setUserNameAvailable(true);
        setUser((prev) => ({ ...prev, userName }));
      }
    } catch (error) {
      setErrorMsg("Username is not available");
      setUserNameAvailable(false)
    }
    setUserNameLoading(false);
  };

  //* EFFECTS /*
  useEffect(() => {
    setSubmitDisabled(!(name && email && password && userName));
  }, [user, userName]);

  useEffect(() => {
    userName === "" ? setUserNameAvailable(false) : checkUsername();
  }, [userName]);

  return (
    <>
      {/* <Container text> */}
      <HeaderMessage />
      <Form
        loading={formLoading}
        error={errorMsg !== null}
        onSubmit={handleSubmit}
      >
        <Segment>
          <DragNDrop
            inputRef={inputRef}
            handleChange={handleChange}
            media={media}
            setMedia={setMedia}
            mediaPreview={mediaPreview}
            setMediaPreview={setMediaPreview}
            highlighted={highlighted}
            setHighlighted={setHighlighted}
          />
          {/*DRAG AND DROP IMAGE HERE*/}
          <Form.Input
            required
            label="Name"
            placeholder="name"
            name="name"
            value={name}
            onChange={handleChange}
            icon="user"
            iconPosition="left"
          />
          <Form.Input
            required
            label="Email"
            placeholder="email"
            name="email"
            value={email}
            onChange={handleChange}
            icon="envelope"
            iconPosition="left"
            type="email"
          />
          <Form.Input
            required
            label="Password"
            placeholder="password"
            name="password"
            value={password}
            onChange={handleChange}
            icon={{
              name: showPassword ? "eye slash" : "eye",
              // color: showPassword ? "red" : "green",
              circular: true,
              link: true,
              onClick: () => setShowPassword(!showPassword),
            }}
            iconPosition="left"
            type={showPassword ? "text" : "password"}
          />
          <Form.Input
            loading={userNameLoading}
            error={!userNameAvailable}
            required
            label="Username"
            placeholder="Username"
            value={userName}
            icon={userNameAvailable ? "check" : "close"}
            // color={userNameAvailable ? "green" : "red"}
            iconPosition="left"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <Divider hidden />
          <Form.Field
            control={TextArea}
            name="bio"
            value={bio}
            onChange={handleChange}
            placeholder="bio"
          />
          <CommonSocials
            user={user}
            onChange={handleChange}
            showSocialLinks={showSocialLinks}
            setShowSocialLinks={setShowSocialLinks}
          />
          <Button
            icon="signup"
            content="Sign Up"
            type="submit"
            color="green"
            disabled={submitDisabled || !userNameAvailable}
          />
        </Segment>
      </Form>
      <FooterMessage />
      {/* </Container> */}
    </>
  );
};

export default signup;
