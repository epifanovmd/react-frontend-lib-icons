import React, { FC, memo } from 'react';
import AlphaLCircleOutlineSvg from '../svg/alpha-l-circle-outline.svg';

export interface IAlphaLCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaLCircleOutlineIcon: FC<IAlphaLCircleOutlineIconProps> = memo(props => {
  return <AlphaLCircleOutlineSvg {...props} />;
});
