import React, { FC, memo } from 'react';
import ApplicationEditSvg from '../svg/application-edit.svg';

export interface IApplicationEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ApplicationEditIcon: FC<IApplicationEditIconProps> = memo(props => {
  return <ApplicationEditSvg {...props} />;
});
