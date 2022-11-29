import React, { FC, memo } from 'react';
import ApplicationEditOutlineSvg from '../svg/application-edit-outline.svg';

export interface IApplicationEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ApplicationEditOutlineIcon: FC<IApplicationEditOutlineIconProps> = memo(props => {
  return <ApplicationEditOutlineSvg {...props} />;
});
