import React, { FC, memo } from 'react';
import HeadOutlineSvg from '../svg/head-outline.svg';

export interface IHeadOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadOutlineIcon: FC<IHeadOutlineIconProps> = memo(props => {
  return <HeadOutlineSvg {...props} />;
});
