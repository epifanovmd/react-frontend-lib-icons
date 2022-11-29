import React, { FC, memo } from 'react';
import SpaOutlineSvg from '../svg/spa-outline.svg';

export interface ISpaOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpaOutlineIcon: FC<ISpaOutlineIconProps> = memo(props => {
  return <SpaOutlineSvg {...props} />;
});
