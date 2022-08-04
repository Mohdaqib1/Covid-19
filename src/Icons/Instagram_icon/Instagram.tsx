import React from 'react';
import styled from "styled-components";
import { IconWrapper } from '../styled-components';
import { ReactComponent as instagram } from './Instagram.svg';

const ClockIcon = styled(instagram)`
  
`

type ClockLogoProps = {
  scale?: number;
  altText: string;
};

const Clock: React.FC<ClockLogoProps> = ({ scale = 1, altText }) => {
  return (
    <IconWrapper width={2 * scale} height={2 * scale} aria-label={altText} style={{ "marginTop": "2px", "width": "1rem", marginLeft: "1px" }}>
      <ClockIcon />
    </IconWrapper>
  );
};

export default Clock;