import React, { FC, memo } from 'react';
import DeleteCircleSvg from '../svg/delete-circle.svg';

export interface IDeleteCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeleteCircleIcon: FC<IDeleteCircleIconProps> = memo(props => {
  return <DeleteCircleSvg {...props} />;
});
