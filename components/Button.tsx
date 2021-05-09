import styled from '@emotion/styled';

interface Props {
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  text: string;
}

export const Button: React.FC<Props> = ({
  className,
  disabled = false,
  onClick,
  text,
}) => {
  return (
    <Wrapper className={className} disabled={disabled} onClick={onClick}>
      {text}
    </Wrapper>
  );
};

const Wrapper = styled.button(({ disabled }) => ({
  borderRadius: 50,
  cursor: disabled ? 'not-allowed' : 'pointer',
  fontSize: 16,
  padding: '10px 0',
  width: '100%',
}));
