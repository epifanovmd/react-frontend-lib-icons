import React, { FC, memo } from 'react';
import AlphaRCircleOutlineSvg from '../svg/alpha-r-circle-outline.svg';

export interface IAlphaRCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaRCircleOutlineIcon: FC<IAlphaRCircleOutlineIconProps> = memo(props => {
  return <AlphaRCircleOutlineSvg {...props} />;
});
