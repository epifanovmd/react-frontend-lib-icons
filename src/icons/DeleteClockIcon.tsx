import React, { FC, memo } from 'react';
import DeleteClockSvg from '../svg/delete-clock.svg';

export interface IDeleteClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeleteClockIcon: FC<IDeleteClockIconProps> = memo(props => {
  return <DeleteClockSvg {...props} />;
});
