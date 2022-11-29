import React, { FC, memo } from 'react';
import DeleteCircleOutlineSvg from '../svg/delete-circle-outline.svg';

export interface IDeleteCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeleteCircleOutlineIcon: FC<IDeleteCircleOutlineIconProps> = memo(props => {
  return <DeleteCircleOutlineSvg {...props} />;
});
