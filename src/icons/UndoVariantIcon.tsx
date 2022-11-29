import React, { FC, memo } from 'react';
import UndoVariantSvg from '../svg/undo-variant.svg';

export interface IUndoVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UndoVariantIcon: FC<IUndoVariantIconProps> = memo(props => {
  return <UndoVariantSvg {...props} />;
});
