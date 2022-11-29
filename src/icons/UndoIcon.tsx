import React, { FC, memo } from 'react';
import UndoSvg from '../svg/undo.svg';

export interface IUndoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UndoIcon: FC<IUndoIconProps> = memo(props => {
  return <UndoSvg {...props} />;
});
