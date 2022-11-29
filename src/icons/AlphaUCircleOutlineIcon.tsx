import React, { FC, memo } from 'react';
import AlphaUCircleOutlineSvg from '../svg/alpha-u-circle-outline.svg';

export interface IAlphaUCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaUCircleOutlineIcon: FC<IAlphaUCircleOutlineIconProps> = memo(props => {
  return <AlphaUCircleOutlineSvg {...props} />;
});
