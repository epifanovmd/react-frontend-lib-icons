import React, { FC, memo } from 'react';
import CctvSvg from '../svg/cctv.svg';

export interface ICctvIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CctvIcon: FC<ICctvIconProps> = memo(props => {
  return <CctvSvg {...props} />;
});
