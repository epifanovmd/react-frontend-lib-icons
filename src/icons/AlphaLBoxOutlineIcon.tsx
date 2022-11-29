import React, { FC, memo } from 'react';
import AlphaLBoxOutlineSvg from '../svg/alpha-l-box-outline.svg';

export interface IAlphaLBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaLBoxOutlineIcon: FC<IAlphaLBoxOutlineIconProps> = memo(props => {
  return <AlphaLBoxOutlineSvg {...props} />;
});
