import React, { FC, memo } from 'react';
import AlphaXBoxOutlineSvg from '../svg/alpha-x-box-outline.svg';

export interface IAlphaXBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaXBoxOutlineIcon: FC<IAlphaXBoxOutlineIconProps> = memo(props => {
  return <AlphaXBoxOutlineSvg {...props} />;
});
