import React, { FC, memo } from 'react';
import HeadAlertOutlineSvg from '../svg/head-alert-outline.svg';

export interface IHeadAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadAlertOutlineIcon: FC<IHeadAlertOutlineIconProps> = memo(props => {
  return <HeadAlertOutlineSvg {...props} />;
});
