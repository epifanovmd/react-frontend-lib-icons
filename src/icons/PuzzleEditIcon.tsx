import React, { FC, memo } from 'react';
import PuzzleEditSvg from '../svg/puzzle-edit.svg';

export interface IPuzzleEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PuzzleEditIcon: FC<IPuzzleEditIconProps> = memo(props => {
  return <PuzzleEditSvg {...props} />;
});
