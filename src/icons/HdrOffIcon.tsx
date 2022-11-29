import React, { FC, memo } from 'react';
import HdrOffSvg from '../svg/hdr-off.svg';

export interface IHdrOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HdrOffIcon: FC<IHdrOffIconProps> = memo(props => {
  return <HdrOffSvg {...props} />;
});
