import React, { FC, memo } from 'react';
import ChiliAlertOutlineSvg from '../svg/chili-alert-outline.svg';

export interface IChiliAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChiliAlertOutlineIcon: FC<IChiliAlertOutlineIconProps> = memo(props => {
  return <ChiliAlertOutlineSvg {...props} />;
});
