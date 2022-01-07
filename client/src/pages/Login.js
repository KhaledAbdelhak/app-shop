import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { login } from "../redux/api";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
   ${mobile({ width: "75%" })};

    
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;

`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;


const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    curos: pointer;
    margin-bottom: 10px;

    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Error = styled.span`
    color: red;
    margin: 5px 0px;
`;

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const {isFetching, error} = useSelector(state => state.user);

    const handleLogin = (e) => {
        e.preventDefault()
        login(dispatch, {username, password})
    }

    return (
        <>
        <Announcement/>
        <Navbar/>
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    {error && <Error>You have entered an invalid username or password</Error>}
                    <Input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                    <Input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                    <Button onClick={handleLogin} disabled={isFetching}>LOGIN</Button>
                    <Link>DO NOT YOU REMEMBER THE PASSWORD ?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
        </>
        
    )
}

export default Login
