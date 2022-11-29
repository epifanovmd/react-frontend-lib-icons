import React, { FC, memo } from 'react';
import RedoSvg from '../svg/redo.svg';

export interface IRedoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RedoIcon: FC<IRedoIconProps> = memo(props => {
  return <RedoSvg {...props} />;
});
