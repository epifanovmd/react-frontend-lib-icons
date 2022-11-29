import React, { FC, memo } from 'react';
import HeadFlashOutlineSvg from '../svg/head-flash-outline.svg';

export interface IHeadFlashOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadFlashOutlineIcon: FC<IHeadFlashOutlineIconProps> = memo(props => {
  return <HeadFlashOutlineSvg {...props} />;
});
