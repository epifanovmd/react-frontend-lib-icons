import React, { FC, memo } from 'react';
import HeadMinusOutlineSvg from '../svg/head-minus-outline.svg';

export interface IHeadMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadMinusOutlineIcon: FC<IHeadMinusOutlineIconProps> = memo(props => {
  return <HeadMinusOutlineSvg {...props} />;
});
