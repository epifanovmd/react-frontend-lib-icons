import React, { FC, memo } from 'react';
import AlphaUBoxOutlineSvg from '../svg/alpha-u-box-outline.svg';

export interface IAlphaUBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaUBoxOutlineIcon: FC<IAlphaUBoxOutlineIconProps> = memo(props => {
  return <AlphaUBoxOutlineSvg {...props} />;
});
