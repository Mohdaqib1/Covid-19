import styled from 'styled-components';

type IconWrapperProps = {
    width?: number;
    height?: number;
}

export const IconWrapper = styled.div`
  display: block;
  width: ${(props: IconWrapperProps) => props.width && props.width + 'rem'};
  height: ${(props: IconWrapperProps) => props.height && props.height + 'rem'};
  min-width: ${(props: IconWrapperProps) => props.width && props.width + 'rem'};
  min-height: ${(props: IconWrapperProps) => props.height && props.height + 'rem'};

  div {
    height: ${(props: IconWrapperProps) =>
      (props.height && props.height + 'rem !important;') || '100%'};
  }

  svg {
    height: ${(props: IconWrapperProps) =>
      (props.height && props.height + 'rem !important;') || '100%'};
  }
`;
