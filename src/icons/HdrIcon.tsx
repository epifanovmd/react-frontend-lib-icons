import React, { FC, memo } from 'react';
import HdrSvg from '../svg/hdr.svg';

export interface IHdrIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HdrIcon: FC<IHdrIconProps> = memo(props => {
  return <HdrSvg {...props} />;
});
