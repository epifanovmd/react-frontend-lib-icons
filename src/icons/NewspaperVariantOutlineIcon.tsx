import React, { FC, memo } from 'react';
import NewspaperVariantOutlineSvg from '../svg/newspaper-variant-outline.svg';

export interface INewspaperVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NewspaperVariantOutlineIcon: FC<INewspaperVariantOutlineIconProps> = memo(props => {
  return <NewspaperVariantOutlineSvg {...props} />;
});
