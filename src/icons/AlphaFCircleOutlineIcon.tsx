import React, { FC, memo } from 'react';
import AlphaFCircleOutlineSvg from '../svg/alpha-f-circle-outline.svg';

export interface IAlphaFCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaFCircleOutlineIcon: FC<IAlphaFCircleOutlineIconProps> = memo(props => {
  return <AlphaFCircleOutlineSvg {...props} />;
});
