import React, { FC, memo } from 'react';
import AlphaYCircleOutlineSvg from '../svg/alpha-y-circle-outline.svg';

export interface IAlphaYCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaYCircleOutlineIcon: FC<IAlphaYCircleOutlineIconProps> = memo(props => {
  return <AlphaYCircleOutlineSvg {...props} />;
});
