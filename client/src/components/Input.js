import styled from "styled-components"

const Input = ({type, placeholder, name, required, handleChange}) => {
    return (
        <StyledInput 
            type={type} 
            placeholder={placeholder} 
            required={required} 
            onChange={(e) => handleChange(name, e.target.value)}
        />
    )
}

const StyledInput = styled.input`
    display: flex;
    padding: 2px;
    width: 100px;
    text-align: center;

` 

export default Input