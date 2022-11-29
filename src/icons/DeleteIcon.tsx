import React, { FC, memo } from 'react';
import DeleteSvg from '../svg/delete.svg';

export interface IDeleteIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeleteIcon: FC<IDeleteIconProps> = memo(props => {
  return <DeleteSvg {...props} />;
});
