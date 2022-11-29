import React, { FC, memo } from 'react';
import RelationOneToOnlyOneSvg from '../svg/relation-one-to-only-one.svg';

export interface IRelationOneToOnlyOneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationOneToOnlyOneIcon: FC<IRelationOneToOnlyOneIconProps> = memo(props => {
  return <RelationOneToOnlyOneSvg {...props} />;
});
