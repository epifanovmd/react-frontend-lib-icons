import React, { FC, memo } from 'react';
import GentooSvg from '../svg/gentoo.svg';

export interface IGentooIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GentooIcon: FC<IGentooIconProps> = memo(props => {
  return <GentooSvg {...props} />;
});
