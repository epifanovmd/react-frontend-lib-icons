import React, { FC, memo } from 'react';
import HeadRemoveOutlineSvg from '../svg/head-remove-outline.svg';

export interface IHeadRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadRemoveOutlineIcon: FC<IHeadRemoveOutlineIconProps> = memo(props => {
  return <HeadRemoveOutlineSvg {...props} />;
});
