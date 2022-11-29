import React, { FC, memo } from 'react';
import AlphaRBoxOutlineSvg from '../svg/alpha-r-box-outline.svg';

export interface IAlphaRBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaRBoxOutlineIcon: FC<IAlphaRBoxOutlineIconProps> = memo(props => {
  return <AlphaRBoxOutlineSvg {...props} />;
});
