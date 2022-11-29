import React, { FC, memo } from 'react';
import PuzzleEditOutlineSvg from '../svg/puzzle-edit-outline.svg';

export interface IPuzzleEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PuzzleEditOutlineIcon: FC<IPuzzleEditOutlineIconProps> = memo(props => {
  return <PuzzleEditOutlineSvg {...props} />;
});
