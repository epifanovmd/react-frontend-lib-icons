import React, { FC, memo } from 'react';
import NewspaperVariantMultipleOutlineSvg from '../svg/newspaper-variant-multiple-outline.svg';

export interface INewspaperVariantMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NewspaperVariantMultipleOutlineIcon: FC<INewspaperVariantMultipleOutlineIconProps> = memo(props => {
  return <NewspaperVariantMultipleOutlineSvg {...props} />;
});
