import React, { FC, memo } from 'react';
import AlphaECircleOutlineSvg from '../svg/alpha-e-circle-outline.svg';

export interface IAlphaECircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaECircleOutlineIcon: FC<IAlphaECircleOutlineIconProps> = memo(props => {
  return <AlphaECircleOutlineSvg {...props} />;
});
