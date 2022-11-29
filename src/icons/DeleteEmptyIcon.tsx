import React, { FC, memo } from 'react';
import DeleteEmptySvg from '../svg/delete-empty.svg';

export interface IDeleteEmptyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeleteEmptyIcon: FC<IDeleteEmptyIconProps> = memo(props => {
  return <DeleteEmptySvg {...props} />;
});
