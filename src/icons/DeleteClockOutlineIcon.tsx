import React, { FC, memo } from 'react';
import DeleteClockOutlineSvg from '../svg/delete-clock-outline.svg';

export interface IDeleteClockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeleteClockOutlineIcon: FC<IDeleteClockOutlineIconProps> = memo(props => {
  return <DeleteClockOutlineSvg {...props} />;
});
