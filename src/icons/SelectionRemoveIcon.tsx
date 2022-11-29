import React, { FC, memo } from 'react';
import SelectionRemoveSvg from '../svg/selection-remove.svg';

export interface ISelectionRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SelectionRemoveIcon: FC<ISelectionRemoveIconProps> = memo(props => {
  return <SelectionRemoveSvg {...props} />;
});
