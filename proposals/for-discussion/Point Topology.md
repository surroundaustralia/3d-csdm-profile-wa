# Point Topology

<!--
:Author:    Andrew Hunter
:Email:     <andrew@edgegeomatics.co.nz>
:Date:      19 September 2023
:Updated:   28 November 2023
:Revision:  0.2

History: 
:Ver 0.1: Initial draft of document
:Ver 0.2: Added spatial relationships for 2D CSDM
-->

#### Table of Contents

1. [Dimensionally Extended 9-Intersection Model (DE-9IM)](#de-9im)
2. [Spatial Relationships Required for the 2D CSDM](#spatial-relationships-required-for-the-2d-csdm)
2. [References](#references)

## DE-9IM

DE-9IM (Egenhofer & Franzosa, 1991; Egenhofer & Herring, 1990) is a topological model used to describe spatial
relationships between two geometries in 2D space. The relationships expressed are invariant to rotation, translation and
scaling.

DE-9IM defines nine intersection patterns that can occur between two geometries, such as points, lines, and polygons.
These patterns describe how the boundaries and interiors of the objects interact with each other. The nine patterns are
typically represented using a 3 by 3 matrix, where each element of the matrix corresponds to a specific intersection
condition.

The following is a brief overview of the nine patterns:

1. Interior-Interior (II): The interiors of both objects intersect - **Contains** or **Covers**, i.e., one geometry's
   interior completely contains the interior of the other geometry.
2. Interior-Boundary (IB): The interior of one object intersects the boundary of the other - **Contains Properly** or *
   *Covers Properly**, i.e., one geometry's interior contains the other's boundary, but not vice versa.
3. Boundary-Interior (BI): The boundary of one object intersects the interior of the other - often referred to as *
   *Within**, i.e., one geometry's boundary is within the interior of the other geometry.
4. Boundary-Boundary (BB): The boundaries of both objects intersect, but their interiors do not - **Touches**.
5. Interior-Exterior (IE): The interior of one object is contained within the exterior of the other (no actual
   intersection) - **Overlaps**.
6. Exterior-Interior (EI): The exterior of one object intersects the interior of the other - **Is Covered By** or **Is
   Within**.
7. Boundary-Exterior (BE): The boundary of one object intersects the exterior of the other - often called **Covers**.
8. Exterior-Boundary (EB): The exterior of one object intersects the boundary of the other - known as **Is Covered By
   Properly** or **Is Within Properly** and indicates that one geometry's exterior is properly covered by the boundary
   of the other.
9. Exterior-Exterior (EE): The exteriors of both objects intersect (no actual intersection of interiors or boundaries) -
   **Disjoint**.

If we assume that occupation observations are to occupation marks then the DE-9IM model reduces to the following
patterns because a point is a zero-dimensional object with no interior, nor boundary. As such a point can be **equal**
to another point geometry, **touch** another line geometry, or **touch** or be **within** another area geometry.
Otherwise, the geometries are disjoint.

## Spatial Relationships Required for the 2D CSDM

**Occupation Marks** are defined as *marks used for a cadastral survey to define the location of an occupation
feature near a cadastral boundary* and an **Occupation Feature** is defined as *those long-established features that
might be used to determine the limits of an occupier’s land, and that are used to exclude possession by others, e.g.,
fences, walls, trees, hedges, buildings, ditches, or other artificial things; and natural land features such as a water
body*. An occupation feature is disjoint from (has no common elements with) a boundary.

Given the discussion above, it is expected that conventional survey measurements to occupation features will result in
occupation marks that **Touch** occupation features that are near to Boundaries and Boundary Marks.

The **Touches** relationship is to be described by a **topology** element embedded in the specification of each 
**OccupationMark**. The **topology** element contains a **type** element defining the type of spatial relationship 
between the **OccupationMark** and the **Occupation Feature** listed in the **references** element. **References** is an
array of **Occupation Feature** identifiers. The **Occupation Feature** may be embeded in a CSD within an 
**occupationFeatures** element using conventional GeoJSON encoding, or the **occupationFeatures** element could contain a link to the occupation feature data.

~~~json lines
{
   "topology": [
      {
         "type": "Touches",
         "references": [
            "964008",
            "964022"
         ]
      }
   ]
}
~~~


### References
Egenhofer, M., & Franzosa, R. D. (1991). Point-set topological spatial relations. International Journal of Geographical 
Information Systems, 5(2), 161–174. https://doi.org/10.1080/02693799108927841

Egenhofer, M., & Herring, J. (1990). Categorizing binary topological relations between regions, lines and points in 
geographic databases, the 9-intersection: Formalism and its Use for Natural Language Spatial Predicates. Santa Barbara 
CA National Center for Geographic Information and Analysis Technical Report, 94, 1–28.

## Revision History

| Version | Date              | Description                             | By            |
|---------|-------------------|-----------------------------------------|---------------|
| 0.1     | 19 September 2023 | Initial draft                           | Andrew Hunter |
| 0.2     | 28 November 2023  | Added spatial relationships for 2D CSDM | Andrew Hunter |


