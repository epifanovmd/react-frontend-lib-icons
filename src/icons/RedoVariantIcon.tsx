import React, { FC, memo } from 'react';
import RedoVariantSvg from '../svg/redo-variant.svg';

export interface IRedoVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RedoVariantIcon: FC<IRedoVariantIconProps> = memo(props => {
  return <RedoVariantSvg {...props} />;
});
