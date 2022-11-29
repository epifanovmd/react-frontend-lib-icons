import React, { FC, memo } from 'react';
import DeleteVariantSvg from '../svg/delete-variant.svg';

export interface IDeleteVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeleteVariantIcon: FC<IDeleteVariantIconProps> = memo(props => {
  return <DeleteVariantSvg {...props} />;
});
