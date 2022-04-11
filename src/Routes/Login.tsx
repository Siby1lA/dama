import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const LeftWrap = styled.div`
  background-color: #388e3c;
  padding: 40px;
  width: 60%;
`;

const LightWrap = styled.div`
  position: relative;
  background-color: white;
  padding: 40px;
  width: 40%;
`;

const Hader = styled.h1`
  margin-top: 30px;
  font-size: 48px;
  margin-bottom: 70px;
  color: white;
  font-weight: 600;
`;

const Explanation = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

const Leftspan = styled.span`
  color: white;
  font-size: 22px;
`;

const Rightbox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 40px;
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const Logo = styled.div`
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 10px;
  margin-right: 15px;
`;

const QRlocation = styled.div``;

const Img = styled.img`
  position: absolute;
  height: 450px;
  left: 0;
  right: 0;
  margin: 0 -100px;
  transform: rotate(15deg);
`;

function Login() {
  return (
    <Wrapper>
      <LeftWrap>
        <Hader>
          환영합니다!
          <br />
          DAMA 쇼핑카트
        </Hader>
        <Leftspan>
          DAMA웹사이트에서 <span style={{ fontWeight: 400 }}> "QR코드"</span> 를
          받아 로그인하세요
          <Explanation>
            <Logo></Logo>
            <QRlocation>
              "www.m.dama.com" 로그인후{" "}
              <FontAwesomeIcon
                icon={faAngleRight}
                color={"white"}
                size={"sm"}
              />
              <br /> 우측하단{" "}
              <FontAwesomeIcon
                icon={faAngleRight}
                color={"white"}
                size={"sm"}
              />
              <span style={{ fontWeight: 400 }}> "QR코드 발급"</span>
            </QRlocation>
          </Explanation>
        </Leftspan>
      </LeftWrap>
      <LightWrap>
        {/* <Img src={"img/mainMokup.png"} /> */}
        <Rightbox>
          <div>
            우측 손잡이의 스캐너에 <br /> QR코드를 스캔하세요.
          </div>
          <div>
            <FontAwesomeIcon
              icon={faCaretRight}
              color={"#F0F4C3"}
              fontSize="150px"
            />
            <FontAwesomeIcon
              icon={faCaretRight}
              color={"#8BC34A"}
              fontSize="150px"
            />
            <FontAwesomeIcon
              icon={faCaretRight}
              color={"#4CAF50"}
              fontSize="150px"
            />
          </div>
        </Rightbox>
      </LightWrap>
    </Wrapper>
  );
}
export default Login;
