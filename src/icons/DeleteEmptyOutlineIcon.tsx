import React, { FC, memo } from 'react';
import DeleteEmptyOutlineSvg from '../svg/delete-empty-outline.svg';

export interface IDeleteEmptyOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeleteEmptyOutlineIcon: FC<IDeleteEmptyOutlineIconProps> = memo(props => {
  return <DeleteEmptyOutlineSvg {...props} />;
});
