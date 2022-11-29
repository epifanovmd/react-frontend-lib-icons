import React, { FC, memo } from 'react';
import RelationOneToManySvg from '../svg/relation-one-to-many.svg';

export interface IRelationOneToManyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationOneToManyIcon: FC<IRelationOneToManyIconProps> = memo(props => {
  return <RelationOneToManySvg {...props} />;
});
