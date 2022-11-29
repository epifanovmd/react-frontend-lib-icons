import React, { FC, memo } from 'react';
import AlphaVCircleOutlineSvg from '../svg/alpha-v-circle-outline.svg';

export interface IAlphaVCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaVCircleOutlineIcon: FC<IAlphaVCircleOutlineIconProps> = memo(props => {
  return <AlphaVCircleOutlineSvg {...props} />;
});
