import React, { FC, memo } from 'react';
import AlphaACircleOutlineSvg from '../svg/alpha-a-circle-outline.svg';

export interface IAlphaACircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaACircleOutlineIcon: FC<IAlphaACircleOutlineIconProps> = memo(props => {
  return <AlphaACircleOutlineSvg {...props} />;
});
